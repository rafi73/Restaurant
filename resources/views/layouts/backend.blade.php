<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- favicon -->
	    <link rel="shortcut icon" href="../images/favicon.ico">
        <title>RMS</title>
        <!-- <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet" /> -->
       

        @section('css')
            <link type="text/css" rel="stylesheet" href="{{ elixir('/css/app.css') }}" />
            <!-- Common CSS -->
            
            <link href="{{asset('themes/backend/unity/css/bootstrap.min.css')}}" rel="stylesheet" />
            <link href="{{asset('themes/backend/unity/fonts/icomoon/icomoon.css')}}" rel="stylesheet" />
            <link href="{{asset('themes/backend/unity/css/main.css')}}" rel="stylesheet" />

            <!-- Other CSS includes plugins - Cleanedup unnecessary CSS -->
            <!-- Chartist css -->
            <!-- <link href="{{asset('themes/backend/unity/vendor/chartist/css/chartist.min.css')}}" rel="stylesheet" />
            <link href="{{asset('themes/backend/unity/vendor/chartist/css/chartist-custom.css')}}" rel="stylesheet" /> -->

            <link href="{{asset('themes/backend/unity/vendor/datatables/dataTables.bs4.css')}}" rel="stylesheet" />
            <link href="{{asset('themes/backend/unity/vendor/datatables/dataTables.bs4-custom.css')}}" rel="stylesheet" />

        @show

        <script>
            window.Laravel = {!! json_encode(['csrfToken' => csrf_token(),]) !!};
        </script>
    </head>
    <body>
        <div id="app">
            
        </div>
        
        @section('js')
            <script src="{{ elixir('/js/main.js') }}"></script>


            <!-- jQuery first, then Tether, then other JS. -->
            <script src="{{asset('themes/backend/unity/js/jquery.js')}}"></script>
            <script src="{{asset('themes/backend/unity/js/tether.min.js')}}"></script>
            <script src="{{asset('themes/backend/unity/js/bootstrap.min.js')}}"></script>
            <script src="{{asset('themes/backend/unity/vendor/unifyMenu/unifyMenu.js')}}"></script>
            <script src="{{asset('themes/backend/unity/vendor/onoffcanvas/onoffcanvas.js')}}"></script>
            <script src="{{asset('themes/backend/unity/js/moment.js')}}"></script>

            <!-- Slimscroll JS -->
            <script src="{{asset('themes/backend/unity/vendor/slimscroll/slimscroll.min.js')}}"></script>
            <script src="{{asset('themes/backend/unity/vendor/slimscroll/custom-scrollbar.js')}}"></script>

            <!-- Chartist JS -->
            <!-- <script src="{{asset('themes/backend/unity/vendor/chartist/js/chartist.min.js')}}"></script>
            <script src="{{asset('themes/backend/unity/vendor/chartist/js/chartist-tooltip.js')}}"></script>
            <script src="{{asset('themes/backend/unity/vendor/chartist/js/custom/custom-area-chart.js')}}"></script>
            <script src="{{asset('themes/backend/unity/vendor/chartist/js/custom/donut-chart4.js')}}"></script>
            <script src="{{asset('themes/backend/unity/vendor/chartist/js/custom/custom-compare-line.js')}}"></script> -->


            <script src="{{asset('themes/backend/unity/vendor/datatables/dataTables.min.js')}}"></script>
            <script src="{{asset('themes/backend/unity/vendor/datatables/dataTables.bootstrap.min.js')}}"></script>
            <script src="{{asset('themes/backend/unity/vendor/datatables/custom/custom-datatables.js')}}"></script>
            <script src="{{asset('themes/backend/unity/vendor/datatables/custom/fixedHeader.js')}}"></script>

            <!-- Common JS -->
            <script src="{{asset('themes/backend/unity/js/common.js')}}"></script>
        @show
    </body>
</html>
