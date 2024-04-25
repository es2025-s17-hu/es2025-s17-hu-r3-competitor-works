<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (Throwable $e, $request) {
            if ($e instanceof ValidationException) {
                return response(collect($e->errors())->first()[0], 400);
            }

            if ($e instanceof NotFoundHttpException) {
                $message = '';
                if (str_contains($e->getMessage(), 'MenuItem')) {
                    $message = 'Menu item not found';
                }
                if (str_contains($e->getMessage(), 'Table')) {
                    $message = 'Table not found';

                    if ($request->routeIs('orders') || $request->routeIs('close')) {
                        $message = 'Order not found';
                    }
                }


                return response($message, 404);
            }
        });
    }
}
