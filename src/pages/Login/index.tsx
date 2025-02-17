import { LoginWrapper } from '@/pages/Login/index.style'
export default function Login() {
    return (
        <LoginWrapper>
            <div className='cont_login'>
                <div className="cont_info_log_sign_up">
                    <div className="col_md_login">
                        <div className="cont_ba_opcitiy">
                            <h2>登 录</h2>
                            <p>点击登录按钮进行登录操作</p>
                            <button className="btn_login">登 录</button>
                        </div>
                    </div>
                    <div className="col_md_sign_up">
                        <div className="cont_ba_opcitiy">
                            <h2>注册</h2>
                            <p>点击注册按钮开始注册</p>
                            <button className="btn_sign_up">
                                注册
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </LoginWrapper>
    )
}
