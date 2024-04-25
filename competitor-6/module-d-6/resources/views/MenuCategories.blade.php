@extends('components.layout')

@php
/*
 * @var $categories
 * */
@endphp

@section('content')
    <a class="Back-dashboard-button" href="/dashboard">Back to dashboard</a>
    <section class="Menu-category-section">
        <h3 class="Section-title">Menu Categories</h3>
        <ul class="Menu-category-list">
            @foreach($categories as $category)
                <li class="Menu-category" draggable="true">
                    <span class="Menu-name">{{$category->name}}</span>
                    <button>Edit</button>
                    <a href="/deleteMenuCategory/{{$category->id}}">Delete</a>
                </li>
            @endforeach

        </ul>
    </section>

@endsection
