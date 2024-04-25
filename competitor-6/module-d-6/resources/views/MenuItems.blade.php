@extends('components.layout')

@section('content')
    <a class="Back-dashboard-button" href="/dashboard">Back to dashboard</a>
    <section class="Menu-items-section">
        <h3 class="Section-title">Menu Items</h3>
        <form method="GET" action="/menuItems">
            <select name="menuCategoryId">
                @foreach($menuCategories as $menuCategory)
                    <option value="{{$menuCategory->id}}">{{$menuCategory->name}}</option>
                @endforeach
            </select>
            <p>{{$selectedCategory ? "Selected: ". $selectedCategory->name : ""}}</p>
            <input type="submit" value="Filter">
        </form>
        <table>
            <thead>
               <td>Name</td>
                <td>Type</td>
                <td>Price</td>
                <td>Action</td>
            </thead>
            <tbody>
            @foreach($menuItems as $menuItem)
                <tr>
                    <td><span class="Item-name">{{$menuItem->name}}</span></td>
                    <td><span class="Item-type">{{$menuItem->type}}</span></td>
                    <td><span class="Item-price">{{$menuItem->price}} Ft</span></td>
                    <td>
                        <a href="/deleteMenuItem/{{$menuItem->id}}">Delete</a></td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </section>
@endsection
