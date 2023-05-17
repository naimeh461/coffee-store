import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, photo ,category,details} = coffee;
    const handleEditCoffee = () =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const UpdatedCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(UpdatedCoffee)
        fetch(`http://localhost:5000/coffee/${_id}`,
        {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(UpdatedCoffee) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        
        })
       
    }
    return (
        <div className="bg-gray-200 w-[80%] mx-auto p-7 my-7 rounded-xl">
            <h2 className="text-center text-2xl font-bold my-5">Update Coffee : {name}</h2>
            <form onSubmit={handleEditCoffee}>
        {/* {form row} */}
            <div className="md:flex justify-around mb-5">
            <div className="form-control  md:w-1/2 ">
            <label className="label"><span className="label-text">Coffee Name</span></label>
            <label className="input-group">
                <input type="text" placeholder="Coffee Name" defaultValue={name} name="name" className="input rounded-lg w-full"/>
            </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
            <label className="label"><span className="label-text">Available Quantity</span></label>
            <label className="input-group">
                <input type="text" placeholder="Quantity" name="quantity" defaultValue={quantity} className="input input-bordered w-full"/>
            </label>
            </div>
            </div>
        {/* {form supplier row} */}
            <div className="md:flex justify-around mb-5">
            <div className="form-control  md:w-1/2 ">
            <label className="label"><span className="label-text">Supplier</span></label>
            <label className="input-group">
                <input type="text" placeholder="Supplier" name="supplier" defaultValue={supplier} className="input rounded-lg w-full"/>
            </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
            <label className="label"><span className="label-text">Taste</span></label>
            <label className="input-group">
                <input type="text" placeholder="Taste" name="taste" defaultValue={taste} className="input input-bordered w-full"/>
            </label>
            </div>
            </div>
        {/* {form Category & Details row} */}
            <div className="md:flex justify-around mb-5">
            <div className="form-control  md:w-1/2 ">
            <label className="label"><span className="label-text">Category</span></label>
            <label className="input-group">
                <input type="text" placeholder="Category" name="category" defaultValue={category} className="input rounded-lg w-full"/>
            </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
            <label className="label"><span className="label-text">Details</span></label>
            <label className="input-group">
                <input type="text" placeholder="Details" defaultValue={details} name="details" className="input input-bordered w-full"/>
            </label>
            </div>
            </div>
        {/* {form row} */}
            <div className="x justify-around mb-5">
            <div className="form-control  w-full ">
            <label className="label"><span className="label-text">Photo</span></label>
            <label className="input-group">
                <input type="text" placeholder="Photo" defaultValue={photo} name="photo" className="input rounded-lg w-full"/>
            </label>
            </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
        </div>
    );
};

export default UpdateCoffee;