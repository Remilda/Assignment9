QUnit.test('My first test', function(assert) {


    var App = window.App;
    var ds = new App.DataStore();
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');
    //ds.remove('james@bond.com');
    ds.getAll();
    ds.get('m@bond.com');
    ds.get('james@bond.com');

    assert.propEqual(ds.get('m@bond.com'), 'tea', 'success');

});




QUnit.test('Truck test', function(assert) {


    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;

    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });

    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });
    //myTruck.printOrders();
  //  myTruck.deliverOrder('me@goldfinger.com');



    assert.deepEqual(myTruck.printOrders(), ["me@goldfinger.com","dr@no.com"], "Result after delivering order of dr@no.com");

});
