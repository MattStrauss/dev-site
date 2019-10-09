@component('mail::message')
# New Message from Contact Form

@component('mail::table')
    | Name              | email               | Start             | Type               | Remote?       |
    | :---------------: | :-----------------: | :---------------: | :----------------: | :-------------:|
    | {{$message->name}} | {{$message->email}} | {{$message->start}} | {{$message->type}} | {{$message->remote}} |
@endcomponent

Description: {{$message->description}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
