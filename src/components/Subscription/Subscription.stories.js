import React from "react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";



export default {
  title: "form/Subscription",
};


export const primarySubscription =() =>{
    return (
      <>
        <Large />
        <Primary />
      </>
    );
}