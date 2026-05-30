<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('consultation.{consultationId}', function ($user, $consultationId) {
    $consultation = \App\Models\Consultation::find($consultationId);
    if (! $consultation) return false;
    return $user->id === $consultation->user_id
        || $user->id === $consultation->doctor->user_id;
});
