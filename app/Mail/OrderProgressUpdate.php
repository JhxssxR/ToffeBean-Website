<?php

namespace App\Mail;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OrderProgressUpdate extends Mailable
{
    use Queueable, SerializesModels;

    public Order $order;

    public ?string $progressMessage;

    public ?string $progressImageUrl;

    public function __construct(Order $order)
    {
        $this->order = $order;
        $this->progressMessage = $order->progress_message;
        $this->progressImageUrl = $order->progress_image
            ? asset('storage/'.$order->progress_image)
            : null;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Your Order #{$this->order->id} is now In Progress! 🎨",
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.order_progress',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
