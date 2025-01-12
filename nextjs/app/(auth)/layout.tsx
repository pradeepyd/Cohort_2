import React from "react";

export default function ({children}:{children:React.ReactNode}){
    return <div>
        <div className="p-2 text-center font-semibold border-b">
            20% off for 3 days
        </div>
        {children}
    </div>
}