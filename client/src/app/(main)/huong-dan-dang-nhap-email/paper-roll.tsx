const PaperRoll = () => {
    return (
        <div className="w-full flex items-center">
            <div
                style={{ clipPath: `circle(50% at 70% 50%)` }}
                className="h-7 w-7 bg-[#F4D914]">
            </div>
            <div className="w-1.5 h-6 bg-[#F4D914] shadow-md border-x border-gray-300 rounded-tr-[2px]"></div>
            <div className="w-1.5 h-[30px] bg-[#F4D914] shadow-md border-x border-gray-300 rounded-tr-[2px]"></div>
            <div className="w-full h-10 bg-[#800020] rounded-[5px]"></div>
            <div className="w-1.5 h-[30px] bg-[#F4D914] shadow-md border-x border-gray-300 rounded-tr-[2px]"></div>
            <div className="w-1.5 h-6 bg-[#F4D914] shadow-md border-x border-gray-300 rounded-tr-[2px]"></div>
            <div
                style={{ clipPath: `circle(50% at 30% 50%)` }}
                className="h-7 w-7 bg-[#F4D914]">
            </div>
        </div>
    )
}

export default PaperRoll;