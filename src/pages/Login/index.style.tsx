import styled, { keyframes, css } from "styled-components";

// -------------------- 动画定义 --------------------
const slideInRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(320px); }
`;

const slideInLeft = keyframes`
  0% { transform: translateX(320px); }
  100% { transform: translateX(0); }
`;

// -------------------- 颜色变量 --------------------
const colors = {
  primary: '#26c6da',
  secondary: '#f06292',
  background: '#fff',
  text: '#333',
  lightBg: '#eee'
};

// -------------------- 阴影变量 --------------------
const shadows = {
  boxShadow: '1px 10px 30px -10px rgba(0, 0, 0, 0.5)',
  contShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
};

// -------------------- 尺寸变量 --------------------
const sizes = {
  containerWidth: '640px',
  formWidth: '280px',
  buttonWidth: '200px',
  buttonPadding: '10px'
};

// -------------------- 按钮样式 --------------------
const buttonStyle = css`
  background-color: ${props => props.bgColor || colors.primary};
  border: none;
  padding: ${sizes.buttonPadding};
  width: ${sizes.buttonWidth};
  border-radius: 3px;
  box-shadow: ${shadows.boxShadow};
  color: ${colors.background};
  margin-top: 10px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

// -------------------- LoginWrapper --------------------
export const LoginWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .cont_login {
    position: relative;
    width: ${sizes.containerWidth};
    box-shadow: ${shadows.contShadow};

    .cont_info_log_sign_up {
      box-shadow: ${shadows.boxShadow};
      display: flex;
      justify-content: space-between;
      height: 280px;
      background: ${colors.background};

      .col_md_login,
      .col_md_sign_up {
        flex: 1;
        background: ${colors.lightBg};
      }
      .col_md_sign_up{
        background: #fff;
      }
      .cont_ba_opcitiy {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .btn_login {
        ${buttonStyle}
      }

      .btn_sign_up {
        ${buttonStyle}
        background-color: ${colors.secondary};
      }
    }

    .login_form {
      position: absolute;
      z-index: -1;
      width: ${sizes.formWidth};
      height: 280px;
      background: ${colors.background};
      box-shadow: ${shadows.boxShadow};
      display: flex;
      flex-direction: column;
      top: 0;
      transition: all 0.3s;
      padding: 20px 30px;
      &.form_to_right {
        animation: ${slideInRight} 0.3s forwards;
      }

      &.form_to_left {
        animation: ${slideInLeft} 0.3s forwards;
      }
      h2{
        text-align:center;
      }
      .captcha-wraper{
         position: relative;
         .captcha-img-box{
           position: absolute;
           background: rgba(0,0,0,0.3);
           right: 2px;
           top: 2px;
           border-radius: 4px;
         }
      }
    }

    .show_login_form {
      z-index: 1;
      height: 380px;
      top: -50px;
    }
  }
`;