import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
       

        //send data to the server
        fetch("http://localhost:5000/coffee",
        {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newCoffee) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        
        })
    }
  return (
    <div className="bg-gray-200 w-[80%] mx-auto p-7 my-7 rounded-xl">
      <h2 className="text-center text-3xl font-bold mb-10">Add New Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* {form row} */}
            <div className="md:flex justify-around mb-5">
            <div className="form-control  md:w-1/2 ">
            <label className="label"><span className="label-text">Coffee Name</span></label>
            <label className="input-group">
                <input type="text" placeholder="Coffee Name" name="name" className="input rounded-lg w-full"/>
            </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
            <label className="label"><span className="label-text">Available Quantity</span></label>
            <label className="input-group">
                <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered w-full"/>
            </label>
            </div>
            </div>
        {/* {form supplier row} */}
            <div className="md:flex justify-around mb-5">
            <div className="form-control  md:w-1/2 ">
            <label className="label"><span className="label-text">Supplier</span></label>
            <label className="input-group">
                <input type="text" placeholder="Supplier" name="supplier" className="input rounded-lg w-full"/>
            </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
            <label className="label"><span className="label-text">Taste</span></label>
            <label className="input-group">
                <input type="text" placeholder="Taste" name="taste" className="input input-bordered w-full"/>
            </label>
            </div>
            </div>
        {/* {form Category & Details row} */}
            <div className="md:flex justify-around mb-5">
            <div className="form-control  md:w-1/2 ">
            <label className="label"><span className="label-text">Category</span></label>
            <label className="input-group">
                <input type="text" placeholder="Category" name="category" className="input rounded-lg w-full"/>
            </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
            <label className="label"><span className="label-text">Details</span></label>
            <label className="input-group">
                <input type="text" placeholder="Details" name="details" className="input input-bordered w-full"/>
            </label>
            </div>
            </div>
        {/* {form row} */}
            <div className="x justify-around mb-5">
            <div className="form-control  w-full ">
            <label className="label"><span className="label-text">Photo</span></label>
            <label className="input-group">
                <input type="text" placeholder="Photo" name="photo" className="input rounded-lg w-full"/>
            </label>
            </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
