"use client";
import React, { useEffect, useState } from "react";
import { InputField } from "@/constant/input-field";
import { SelectOptionField } from "@/constant/select-option";
import { DataTokens, DisplayType, TOKENS_PRICE } from "@/utils/token-price";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const SwapCurrency = () => {
  const [optionSend, setOptionSend] = useState<DataTokens>(TOKENS_PRICE[4]);
  const [optionReceive, setOptionReceive] = useState<DataTokens>(
    TOKENS_PRICE[3]
  );
  const [openModel, setOpenModel] = useState<boolean>(false);
  const [openModelReceive, setOpenModelReceive] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [valueReceive, setValueReceive] = useState<string>("");
  const [displayButtonType, setDisplayButtonType] = useState<DisplayType>(
    DisplayType.ENTER_INPUT
  );

  const handleClickOpen = () => {
    setOpenModel(true);
  };
  const handleClose = () => {
    setOpenModel(false);
  };
  const handleClickOpenReceive = () => {
    setOpenModelReceive(true);
  };
  const handleCloseReceive = () => {
    setOpenModelReceive(false);
  };

  const handleOptionClick = (option: DataTokens) => {
    if (option.currency !== optionReceive.currency) {
      setOptionSend(option);
      setOpenModel(false);
    }
  };

  const handleOptionClick1 = (option: DataTokens) => {
    if (option.currency !== optionSend.currency) {
      setOptionReceive(option);
      setOpenModelReceive(false);
    }
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value === "") {
      setValueReceive("");
    }
    setDisplayButtonType(value ? DisplayType.CONFIRM : DisplayType.ENTER_INPUT);
  }, [value]);

  const confirmSwap = () => {
    if (value && optionSend.currency && optionReceive.currency) {
      const price = Number(value) * (optionSend.price / optionReceive.price);

      setValueReceive(price.toString());
    }
  };

  const rate = optionSend.price / optionReceive.price;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="px-6 py-5 lg:px-8 border-2 border-gray-200 dark:border-gray-400 rounded-2xl w-[480px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 text-gray-900 shadow-xl transition duration-300">
        <div className="flex items-center justify-center pt-5 pb-7 sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt=""
            src="https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/SWTH.svg"
            className="w-10 h-10 rounded-full"
          />
          <h2 className="ml-3 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Swap Currency
          </h2>
        </div>
        <div className="bg-gray-100 rounded-2xl text-gray-300 text-xl font-medium h-30 leading-5 p-5 relative">
          <div className="flex flex-col relative rounded-2xl z-10 w-auto transition-height duration-1000 ease-in-out">
            <div className="min-h-11 rounded-2xl w-auto">
              <div className="block text-sm font-medium leading-6 text-gray-800">
                Amount to send
              </div>
              <div className="flex flex-row items-center justify-between mt-1">
                <div className="flex flex-grow">
                  <InputField onChange={handleChange} value={value} />
                </div>
                <div className="inline-block">
                  <SelectOptionField
                    data={TOKENS_PRICE}
                    handleOptionClick={handleOptionClick}
                    onClickOpen={handleClickOpen}
                    onClose={handleClose}
                    option={optionSend}
                    open={openModel}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-10 relative mx-auto bg-gray-100 border-4 border-white rounded-full">
          <div className="inline-flex items-center justify-center w-full mt-1">
            <ArrowDownwardIcon fontSize="small" color="primary" />
          </div>
        </div>
        <div className="bg-gray-100 rounded-2xl text-gray-500 text-xl font-medium h-30 leading-5 p-5 relative">
          <div className="flex flex-col relative rounded-2xl z-10 w-auto transition-height duration-1000 ease-in-out">
            <div className="min-h-11 rounded-2xl w-auto">
              <div className="block text-sm font-medium leading-6 text-gray-500">
                Amount to receive
              </div>
              <div className="flex flex-row items-center justify-between mt-1">
                <div className="flex flex-grow">
                  <InputField
                    onChange={() => {}}
                    value={valueReceive}
                    disabled
                  />
                </div>
                <div className="inline-block">
                  <SelectOptionField
                    data={TOKENS_PRICE}
                    handleOptionClick={handleOptionClick1}
                    onClickOpen={handleClickOpenReceive}
                    onClose={handleCloseReceive}
                    option={optionReceive}
                    open={openModelReceive}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={confirmSwap}
          disabled={!value}
          className={`relative  text-blue-950 text-lg font-medium py-4 mt-5 w-full leading-6 text-center rounded-2xl outline-none border-transparent no-underline flex justify-center items-center cursor-pointer transform transition-all duration-300 ${
            !value ? "bg-gray-200 cursor-auto" : "bg-sky-300 hover:bg-sky-400"
          }`}
        >
          <span className="absolute inset-0 bg-transparent rounded-xl transition-colors duration-300"></span>
          {displayButtonType}
        </button>
        {value.length > 0 && (
          <div className="flex items-start py-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-lg font-mono leading-9 tracking-tight text-gray-900">
              {`Rate: 1 ${optionSend.currency} = ${rate} ${optionReceive.currency} `}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
