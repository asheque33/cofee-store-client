
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    
    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const updatedCoffee ={name,quantity,supplier,taste,category,details,photo};
        console.log(updatedCoffee);
        
        
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
        headers:{
        "content-type": "application/json"
        },
        body: JSON.stringify(updatedCoffee),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
         if (data.modifiedCount){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee update Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            }   
        });
    }
    
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-bold ">Update Coffee</h2>
     <form onSubmit={handleUpdateCoffee}>
        {/* form name_quantity row */}
     <div className='md:flex'>
       <div className="form-control mb-5 md:w-1/2 me-5">
<label className="label">
<span className="label-text">Coffee Name</span>
</label>
<label className="input-group">
<input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
</label>
</div>
<div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">Available Quantity</span>
</label>
<label className="input-group">
<input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
</label>
</div>
    </div>
        {/* form supplier_taste row */}
     <div className='md:flex'>
       <div className="form-control mb-5 md:w-1/2 me-5">
<label className="label">
<span className="label-text">Supplier</span>
</label>
<label className="input-group">
<input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
</label>
</div>
<div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">Taste</span>
</label>
<label className="input-group">
<input type="text" name='taste' defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
</label>
</div>
    </div>
        {/* form category_details  row */}
     <div className='md:flex'>
       <div className="form-control mb-5 md:w-1/2 me-5">
<label className="label">
<span className="label-text">Category</span>
</label>
<label className="input-group">
<input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
</label>
</div>
<div className="form-control md:w-1/2">
<label className="label">
<span className="label-text">Details</span>
</label>
<label className="input-group">
<input type="text" name='details' defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
</label>
</div>
</div>
        {/* form photo_url  row */}
     <div className='w-full'>
       <div className="form-control mb-5">
<label className="label">
<span className="label-text">Photo URL</span>
</label>
<label className="input-group">
<input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
</label>
</div>
<input type="submit" className="btn btn-block bg-amber-500 text-gray-500" value="Update Coffee" />
    </div>
   </form>
   
  </div>
    );
};

export default UpdateCoffee;