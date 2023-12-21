import React from 'react'

const InputItem = ({type}) => {
    return (
      <>
        <div className="bg-slate-200 p-3 rounde-lg mt-3 flex items-center gap-2">
          <div>
            {type == "source" ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                data-baseweb="icon"
              >
                <title>search</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                data-baseweb="icon"
              >
                <title>search</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 10h-4v4h4v-4ZM7 7v10h10V7H7Z"
                  fill="currentColor"
                ></path>
              </svg>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder={
                type == "source" ? "Pickup Location" : "Drop Location"
              }
              className="bg-transparent w-full outline-none"
            />
        </div>
          </div>
             
        
      </>
    );
}

export default InputItem
