function Benefy({ image1, image2, text1, text2, grad, second }) {
  const back = "absolute bottom-0 w-full h-32 rounded-b-md " + grad;

  return (
    <div className="w-full h-44">
      <div className="flex items-center h-full justify-center rounded-md relative">
        <div>
          <img
            className="absolute top-0 left-0 rounded-t-md"
            src={image1}
            alt=""
          />
        </div>
        <div className="flex flex-col z-10 justify-center items-center text-center ">
          <img className="w-12 rounded-md" src={image2} alt="" />
          {second ? <p className="text-gray-300 text-[10px] mt-2 ">{second} </p> : ""}
          
          {second ? <p className="text-white text-sm">{text1}</p> : <p className="text-white text-sm mt-2">{text1}</p>}
          <p className="text-gray-300 text-[10px] ">{text2}</p>
        </div>
        <div className={back}></div>
      </div>
    </div>
  );
}

export default Benefy;
