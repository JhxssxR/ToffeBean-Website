<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Update</title>
</head>
<body style="margin: 0; padding: 0; background-color: #fef6eb; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #fef6eb; padding: 40px 0;">
        <tr>
            <td align="center">
                <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 16px; border: 3px solid #4a2c11; box-shadow: 4px 4px 0px #4a2c11; overflow: hidden;">

                    {{-- Header --}}
                    <tr>
                        <td style="background-color: #1e1309; padding: 28px 32px; text-align: center;">
                            <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                                <tr>
                                    <td style="width: 40px; height: 40px; background-color: #E67E22; border-radius: 12px; border: 2px solid #4a2c11; text-align: center; vertical-align: middle; color: #fff; font-weight: 900; font-size: 20px;">
                                        T
                                    </td>
                                    <td style="padding-left: 12px;">
                                        <div style="font-weight: 900; color: #ffffff; font-size: 18px; letter-spacing: -0.3px;">ToffeeBean</div>
                                        <div style="font-size: 10px; color: #E67E22; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-top: 2px;">ORDER UPDATE</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    {{-- Status Badge --}}
                    <tr>
                        <td style="padding: 28px 32px 0; text-align: center;">
                            <span style="display: inline-block; background-color: #fef3c7; color: #b45309; border: 2px solid #fbbf24; border-radius: 999px; padding: 6px 18px; font-size: 12px; font-weight: 800; letter-spacing: 0.5px;">
                                🎨 IN PROGRESS
                            </span>
                        </td>
                    </tr>

                    {{-- Main Content --}}
                    <tr>
                        <td style="padding: 24px 32px;">
                            <h1 style="color: #4a2c11; font-size: 22px; font-weight: 900; margin: 0 0 8px; text-align: center;">
                                Your Order #{{ $order->id }} is being worked on!
                            </h1>
                            <p style="color: #4a2c11; opacity: 0.6; font-size: 14px; font-weight: 600; text-align: center; margin: 0 0 24px;">
                                Great news — we've started working on your commission. Here's an update for you! ✨
                            </p>

                            {{-- Progress Image --}}
                            @if($progressImageUrl)
                            <div style="margin-bottom: 20px; text-align: center;">
                                <img src="{{ $progressImageUrl }}" alt="Progress Update" style="max-width: 100%; border-radius: 12px; border: 3px solid #4a2c11; box-shadow: 3px 3px 0px #d4b896;" />
                            </div>
                            @endif

                            {{-- Message from Artist --}}
                            @if($progressMessage)
                            <div style="background-color: #fef1df; border: 2px solid #d4b896; border-radius: 12px; padding: 16px 20px; margin-bottom: 20px;">
                                <div style="font-size: 10px; font-weight: 800; color: #4a2c11; opacity: 0.5; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                                    💬 Message from the Artist
                                </div>
                                <p style="color: #4a2c11; font-size: 14px; font-weight: 600; margin: 0; line-height: 1.6; white-space: pre-wrap;">{{ $progressMessage }}</p>
                            </div>
                            @endif

                            {{-- Order Details --}}
                            <div style="background-color: #fffcf7; border: 2px solid #fef1df; border-radius: 12px; padding: 16px 20px;">
                                <div style="font-size: 10px; font-weight: 800; color: #4a2c11; opacity: 0.5; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
                                    📋 Order Summary
                                </div>
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td style="padding: 4px 0; font-size: 13px; color: #4a2c11; opacity: 0.6; font-weight: 700;">Commission</td>
                                        <td style="padding: 4px 0; font-size: 13px; color: #4a2c11; font-weight: 800; text-align: right;">{{ $order->commission->title ?? 'N/A' }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 4px 0; font-size: 13px; color: #4a2c11; opacity: 0.6; font-weight: 700;">Quantity</td>
                                        <td style="padding: 4px 0; font-size: 13px; color: #4a2c11; font-weight: 800; text-align: right;">×{{ $order->quantity }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 4px 0; font-size: 13px; color: #E67E22; font-weight: 800;">Total</td>
                                        <td style="padding: 4px 0; font-size: 15px; color: #E67E22; font-weight: 900; text-align: right;">${{ number_format($order->total_price, 2) }}</td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>

                    {{-- Footer --}}
                    <tr>
                        <td style="padding: 20px 32px 28px; text-align: center; border-top: 2px solid #fef1df;">
                            <p style="color: #4a2c11; opacity: 0.4; font-size: 12px; font-weight: 700; margin: 0;">
                                Thank you for choosing ToffeeBean! 🧡
                            </p>
                            <p style="color: #4a2c11; opacity: 0.3; font-size: 11px; font-weight: 600; margin: 8px 0 0;">
                                If you have any questions, feel free to reply to this email.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
