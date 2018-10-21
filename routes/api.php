<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


# OrderType Routes
// List OrderTypes
Route::get('orderTypes', 'OrderTypeController@index')->name('order-types');
//  get one manufacturer type
Route::get('orderType/{id}', 'OrderTypeController@show')->name('pull-order-type');
// Create new manufacturer type
Route::post('orderType', 'OrderTypeController@store')->name('store-order-type');
// Update manufacturer
Route::put('orderType', 'OrderTypeController@store')->name('update-order-type');
// Delete manufacturer
Route::delete('orderType/{id}', 'OrderTypeController@destroy')->name('delete-order-type');

# ResturantMenu Routes
// List OrderTypes
Route::get('resturantMenus', 'ResturantMenuController@index');
//  get one manufacturer type
Route::get('resturantMenu/{id}', 'ResturantMenuController@show');
// Create new manufacturer type
Route::post('resturantMenu', 'ResturantMenuController@store');
// Update manufacturer
Route::put('resturantMenu', 'ResturantMenuController@store');
// Delete manufacturer
Route::delete('resturantMenu/{id}', 'ResturantMenuController@destroy');

# MenuCategoryController Routes
// List OrderTypes
Route::get('menuCategories', 'MenuCategoryController@index');
//  get one manufacturer type
Route::get('menuCategory/{id}', 'MenuCategoryController@show');
// Create new manufacturer type
Route::post('menuCategory', 'MenuCategoryController@store');
// Update manufacturer
Route::put('menuCategory', 'MenuCategoryController@store');
// Delete manufacturer
Route::delete('menuCategory/{id}', 'MenuCategoryController@destroy');


# ResturantController Routes
// List OrderTypes
Route::get('resturants', 'ResturantController@index');
//  get one manufacturer type
Route::get('resturant/{id}', 'ResturantController@show');
// Create new manufacturer type
Route::post('resturant', 'ResturantController@store');
// Update manufacturer
Route::put('resturant', 'ResturantController@store');
// Delete manufacturer
Route::delete('resturant/{id}', 'ResturantController@destroy');

# DiningTableStatusController Routes
// List OrderTypes
Route::get('diningTableStatuses', 'DiningTableStatusController@index');
//  get one manufacturer type
Route::get('diningTableStatus/{id}', 'DiningTableStatusController@show');
// Create new manufacturer type
Route::post('diningTableStatus', 'DiningTableStatusController@store');
// Update manufacturer
Route::put('diningTableStatus', 'DiningTableStatusController@store');
// Delete manufacturer
Route::delete('diningTableStatus/{id}', 'DiningTableStatusController@destroy');

# Menu Item Routes
// List Item Routes
Route::get('menuItems', 'MenuItemController@index');
//  get one Item Routes
Route::get('menuItem/{id}', 'MenuItemController@show');
// Create new Item Route
Route::post('menuItem', 'MenuItemController@store');
// Update  Item Route
Route::put('menuItem', 'MenuItemController@store');
// Delete  Item Route
Route::delete('menuItem/{id}', 'MenuItemController@destroy');

# SectionType Routes
// List OrderTypes
Route::get('sectionTypes', 'SectionTypeController@index');
//  get one OrderType 
Route::get('sectionType/{id}', 'SectionTypeController@show');
// Create new OrderType 
Route::post('sectionType', 'SectionTypeController@store');
// Update OrderType
Route::put('sectionType', 'SectionTypeController@store');
// Delete OrderType
Route::delete('sectionType/{id}', 'SectionTypeController@destroy');

# Customer Routes
// List customers
Route::get('customers', 'CustomerController@index');
//  get one Customer 
Route::get('customer/{id}', 'CustomerController@show');
// Create new Customer 
Route::post('customer', 'CustomerController@store');
// Update Customer
Route::put('customer', 'CustomerController@store');
// Delete Customer
Route::delete('customer/{id}', 'CustomerController@destroy');

# orderDetail Routes
// List orderDetail
Route::get('orderDetails', 'OrderDetailController@index');
//  get one orderDetail 
Route::get('orderDetail/{id}', 'OrderDetailController@show');
// Create new orderDetail 
Route::post('orderDetail', 'OrderDetailController@store');
// Update orderDetail
Route::put('orderDetail', 'OrderDetailController@store');
// Delete orderDetail
Route::delete('orderDetail/{id}', 'OrderDetailController@destroy');

# Reservation Routes
// List Reservation
Route::get('reservations', 'ReservationController@index');
//  get one Reservation 
Route::get('reservation/{id}', 'ReservationController@show');
// Create new Reservation 
Route::post('reservation', 'ReservationController@store');
// Update Reservation
Route::put('reservation', 'ReservationController@store');
// Delete Reservation
Route::delete('reservation/{id}', 'ReservationController@destroy');

