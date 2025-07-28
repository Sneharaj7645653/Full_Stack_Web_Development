const MenuCard = (props)=>{
    const { title, description, price, image, isBestseller, isVeg } = props;

    const handleAddItem = ()=>{
      
    }


    return (
    <div className="flex items-start justify-between bg-white p-6 rounded-xl shadow-md border border-gray-200 max-w-4xl mx-auto mt-8 hover:shadow-lg transition-shadow ">

      <div className="flex-1 pr-6  w-56">
        <div className="flex items-center gap-2 mb-1 ">
            {isVeg ==1? (<div className="w-4 h-4 border border-green-500 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
            </div>) : (<div className="w-4 h-4 border border-red-500 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
            </div>)}
            {isBestseller==1 ? (<span className="text-red-500 text-sm font-semibold">Bestseller</span>) : null}
        </div>
       
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-800 font-medium text-base mt-1 w-28">₹{price/100}</p>
        <p className="text-gray-600 text-sm mt-2">{description || "No description available."}</p>
        
        
      </div>

      {/* Image and Add Button */}
      <div className="flex flex-col items-center min-w-[120px] ">
        <img
          src={image}
          alt="image"
          className="w-24 h-24 rounded-lg object-cover mb-2"
        />
        <button className="bg-white border border-gray-300 px-4 py-1 rounded-full text-green-600 font-semibold shadow-sm hover:bg-green-50" onClick={handleAddItem}>
          ADD
        </button>
      </div>
  </div>
  );
}

export default MenuCard;