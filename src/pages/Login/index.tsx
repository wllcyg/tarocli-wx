import { LoginWrapper } from '@/pages/Login/index.style'
import { useState } from 'react'
import classNames from 'classnames'
import { ArrowLeftOutlined } from '@ant-design/icons'
export default function Login() {
    const [isShowLogin, setIsShowLogin] = useState(false)
    // 卡片位置
    const [position, setPosition] = useState<string>('left')
    // 注册按钮
    const handleSignUp = () => {
        setPosition('right')
        setIsShowLogin(true)

    }
    // 登录按钮
    const handleLogin = () => {
        setIsShowLogin(true)
        setPosition('left')
    }
    // 隐藏卡片
    const handleClose = () => {
        setIsShowLogin(false)
    }
    return (
        <LoginWrapper >
            <div className='cont_login'>
                <div className="cont_info_log_sign_up">
                    <div className="col_md_login">
                        <div className="cont_ba_opcitiy">
                            <h2>登 录</h2>
                            <p>点击登录按钮进行登录操作</p>
                            <button className="btn_login" onClick={handleLogin}>登 录</button>
                        </div>
                    </div>
                    <div className="col_md_sign_up">
                        <div className="cont_ba_opcitiy">
                            <h2>注册</h2>
                            <p>点击注册按钮开始注册</p>
                            <button className="btn_sign_up" onClick={handleSignUp}>
                                注册
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classNames('login_form', { 'show_login_form': isShowLogin, 'form_to_right': position === 'right', 'form_to_left': position === 'left' })}>
                    <div>
                        <ArrowLeftOutlined onClick={handleClose} />
                        <h2>{ position === 'left' ? '登录' : '注册' }</h2>
                        
                    </div>

                </div>
            </div>

        </LoginWrapper>
    )
}
