import { toast } from "react-toastify";
import http from "axios";
import swal from "sweetalert";
import axios from "axios";

export const manualSignIn = (username, Password) => async (disaptch) => {
    try {
      console.log("Is is api call hit?")
      let data = {
        agent_id: "E15299",
        password:"Sourav@123"
      };
      let config = {
        method: "post",
        url: "http://172.17.19.110:8080/test2/v1/login/",
        data,
      };
      console.log("Is is api call hit2?")
      let apiResponse = await axios(config);
      console.log("Response", apiResponse.status);
      if( apiResponse.status === 200) {
        swal({
          title: "Success",
          text: "Successfully Logged In",
          icon: "success",
          button: "Close",
        });
      }else{
        swal({
          title: "warning",
          text: " Logged In Fail",
          icon: "warning",
          button: "Close",
        });
      }
      // if (apiResponse?.data?.statusCode === 200) {
      //   let config = {
      //     method: "get",
      //     url: `Login/UserValidate?token=${apiResponse?.data?.data?.token}`,
      //   };
      //   let response = await http(config);
      //   console.log(response, "agentlogin");
      //   if (response.data.statusCode === 200) {
      //     toast.success("Logged In Success", {
      //       autoClose: "5000",
      //     });
  
      //     let localStorageObj = {
      //       accessToken: apiResponse?.data?.data?.token,
      //       isAdmin: true,
      //       roleId: response.data.data.roleId,
      //       userId: response.data.data.userId,
      //       lastModifiedOn: response.data.data.lastModifiedOn,
      //       userName: `${response.data.data.firstName} ${response.data.data.lastname}`,
      //     };
      //     localStorage.setItem("cuchdCsrf", JSON.stringify(localStorageObj));
  
      //     if (
      //       response.data.data.roleId === 1 ||
      //       response.data.data.roleId === 2 ||
      //       response.data.data.roleId === 3
      //     ) {
      //       localStorage.setItem("adminData", JSON.stringify(response.data.data));
      //     } else {
      //       localStorage.setItem("userData", JSON.stringify(response.data.data));
      //     }
      //     if (
      //       response.data.data.roleId === 1 ||
      //       response.data.data.roleId === 2 ||
      //       response.data.data.roleId === 3
      //     ) {
      //       window.location.href = "/admin-dashboard";
      //     }
      //     if (
      //       response.data.data.roleId === 5 ||
      //       response.data.data.roleId === 4
      //     ) {
      //       window.location.href = "/events";
      //     }
      //   }
      //   disaptch(handleLoding("idle"));
      // } else {
      //   toast.error("Invalid Login Credentials");
      //   disaptch(handleLoding("idle"));
      // }
console.log("Ok hitted")
    } catch (err) {
      toast.error("Error While Logging In", { autoClose: 2000 });
      
    }
  };