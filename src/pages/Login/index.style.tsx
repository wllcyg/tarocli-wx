import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #cfd8dc;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd8dc', endColorstr='#b0bec5',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  .cont_login {
    position: relative;
    width: 640px;
    .cont_info_log_sign_up {
      box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: space-between;
      height: 280px;
      background: #fff;
      .col_md_login{
        background: rgb(238, 238, 238);
        flex: 1;
      }
      .col_md_sign_up{
        flex: 1;
      }  
      .cont_ba_opcitiy{
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }
      .btn_login,
      .btn_sign_up{
        background-color: #26c6da;
        border: none;
        padding: 10px;
        width: 200px;
        border-radius: 3px;
        box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);
        color: #fff;
        margin-top: 10px;
        cursor: pointer;
        transition: opacity 0.2s;
         &:hover {
          opacity: 0.9;
        }
      }
      .btn_sign_up{
        background-color: #f06292;
      }  
    }
  }
    
`