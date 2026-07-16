<?php

namespace App\Http\Controllers;

use App\Models\HomeService;
use Illuminate\Http\Request;

class HomeServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(HomeService::orderBy('sort_order')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'img_file' => 'nullable|image',
            'gallery_files.*' => 'image',
            'is_active' => 'nullable',
            'sort_order' => 'nullable',
        ]);

        $data = [
            'title' => $validated['title'],
            'description' => $validated['description'],
            'is_active' => filter_var($request->is_active, FILTER_VALIDATE_BOOLEAN),
            'sort_order' => (int) $request->sort_order,
            'gallery' => []
        ];

        if ($request->hasFile('img_file')) {
            $file = $request->file('img_file');
            $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('images/services'), $filename);
            $data['img'] = '/images/services/' . $filename;
        }

        if ($request->hasFile('gallery_files')) {
            foreach ($request->file('gallery_files') as $file) {
                $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
                $file->move(public_path('images/services'), $filename);
                $data['gallery'][] = '/images/services/' . $filename;
            }
        }

        $homeService = HomeService::create($data);

        return response()->json($homeService, 201);
    }

    public function show(HomeService $homeService)
    {
        return response()->json($homeService);
    }

    public function update(Request $request, HomeService $homeService)
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'img_file' => 'nullable|image',
            'gallery_files.*' => 'image',
            'gallery_existing' => 'nullable|array',
            'is_active' => 'nullable',
            'sort_order' => 'nullable',
        ]);

        $data = [
            'title' => $request->has('title') ? $validated['title'] : $homeService->title,
            'description' => $request->has('description') ? $validated['description'] : $homeService->description,
            'is_active' => $request->has('is_active') ? filter_var($request->is_active, FILTER_VALIDATE_BOOLEAN) : $homeService->is_active,
            'sort_order' => $request->has('sort_order') ? (int) $request->sort_order : $homeService->sort_order,
        ];

        if ($request->hasFile('img_file')) {
            $file = $request->file('img_file');
            $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('images/services'), $filename);
            $data['img'] = '/images/services/' . $filename;
        }

        // Handle Gallery (only update if title is present, indicating a full form submit)
        if ($request->has('title')) {
            $gallery = $request->input('gallery_existing', []);
            if ($request->hasFile('gallery_files')) {
                foreach ($request->file('gallery_files') as $file) {
                    $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
                    $file->move(public_path('images/services'), $filename);
                    $gallery[] = '/images/services/' . $filename;
                }
            }
            $data['gallery'] = $gallery;
        }

        $homeService->update($data);

        return response()->json($homeService);
    }

    public function destroy(HomeService $homeService)
    {
        $homeService->delete();

        return response()->json(null, 204);
    }
}
