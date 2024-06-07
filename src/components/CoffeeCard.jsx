import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const CoffeeCard = ({coffee,coffees,setCoffees}) => {
  const { _id, name, quantity, supplier, taste, category, photo } = coffee;


  const handleDelete = (id) => {
console.log(id);

Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {

  fetch(`http://localhost:5000/coffee/${_id}`,{
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(data => console.log(data))

  Swal.fire(
    'Deleted!',
    'Your coffee has been deleted.',
    'success'
  )
  const remainingCoffees = coffees.filter(delCoffee => delCoffee._id !== _id);
  setCoffees(remainingCoffees);
  }
})

  }

  return (
    <div className="card card-side mb-10 bg-base-100 shadow-xl w-full">
      <figure><img src={photo} className="w-1/2 border border-spacing-2 px-0" alt="Movie" /></figure>
      <div className="w-1/2 flex justify-between gap-x-4">
        <div className="">
        <h2 className="card-title">Name : {name}</h2>
          <p>Supplier :{supplier}</p>
          <p>Available :{quantity}</p>
          <p>{category}</p>
          <p>{taste}</p>
        </div>
        <div className="btn-group btn-group-vertical gap-y-3 border border-spacing-2">
  <button className="btn btn-active">View</button>
  <Link to={`/updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
  <button onClick={() => handleDelete(_id)} className="btn">X</button>
</div>
      </div>
    </div>
  );
};

export default CoffeeCard;