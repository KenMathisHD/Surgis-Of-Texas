<!DOCTYPE html>
<html>
<head>
    <title>@yield('title') | My Site</title>
    @include('partials/head')
</head>

<body>

@include('partials/header')

<div class="page-container row-fluid">

    @include('partials/menu')

    <div class="page-content">

        <div class="content sm-gutter">

            <ul class="breadcrumb clearfix">

                <div class="pull-left">
                    @yield('breadcrumb')
                </div>

            </ul><!-- end breadcrumb -->

            {!! Notification::showAll() !!}

            @yield('content')

        </div><!-- end content sm-gutter -->

    </div><!-- end page-content -->

</div><!-- end page-container row-fluid -->

@include('partials/footer')

</body>
</html>