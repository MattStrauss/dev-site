@component('mail::message')
# New Message from Contact Form

@component('mail::table')
    | Name          | email         | Start      | Type          | Remote        | Start |
    | ------------- |:-------------:| --------:| | ------------- |:-------------:| --------:|
    | {{$message->name}} | {{$message->email}} | {{$message->start}} | {{$message->type}} | {{$message->remote}} | {{$message->start}}|
@endcomponent

Description: {{$message->description}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
