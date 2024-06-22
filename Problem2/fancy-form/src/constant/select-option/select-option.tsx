import { DataTokens } from "@/utils/token-price";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  MenuList,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React from "react";

interface SelectOptionProp {
  onClickOpen: () => void;
  onClose: () => void;
  option: DataTokens;
  open: boolean;
  data: DataTokens[];
  handleOptionClick: (option: DataTokens) => void;
}

export const SelectOptionField = ({
  onClickOpen,
  option,
  open,
  data,
  handleOptionClick,
  onClose,
}: SelectOptionProp) => {
  return (
    <div>
      {/* Button */}
      <button
        className="flex items-center justify-between opacity-100 text-gray-900 cursor-pointer h-9 rounded-full outline-none select-none border border-gray-100 font-medium px-4 ml-3 shadow-sm shadow-gray-900/10 visible animate-none text-center no-underline relative z-10 will-change-transform transition-transform ease-in transform box-border m-0 min-w-0 appearance-none"
        onClick={onClickOpen}
        style={{ backgroundColor: "white" }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start box-border p-0 m-0 min-w-0">
            <div className="h-8 w-8 mr-2" style={{ marginLeft: "0.1rem" }}>
              <img
                alt=""
                src={option.icon}
                className="w-full h-full rounded-full"
              />
            </div>
            <span
              className="text-lg font-medium m-0"
              style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
            >
              {option.currency}
            </span>
          </div>
          <KeyboardArrowDownIcon />
        </div>
      </button>

      {/* Options */}
      <Dialog
        onClose={onClose}
        open={open}
        sx={{ "& .MuiPaper-root": { width: "80%", borderRadius: "15px" } }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Choose a token
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <HighlightOffIcon />
        </IconButton>
        <DialogContent dividers>
          {data.map((option) => (
            <MenuList key={option.currency}>
              <MenuItem
                onClick={() => handleOptionClick(option)}
                className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer"
              >
                <div className="h-10 w-10 relative">
                  <img
                    alt=""
                    src={option.icon}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span
                  className="text-lg font-bold"
                  style={{ marginLeft: "2rem" }}
                >
                  {option.currency}
                </span>
              </MenuItem>
            </MenuList>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};
