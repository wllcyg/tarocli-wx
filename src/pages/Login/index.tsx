import { LoginWrapper } from '@/pages/Login/index.style'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { useAxios } from '@/utils/reqest'
import { unescape } from 'querystring'
interface captchaRes {
    captchaId: number
    data: string
}
export default function Login() {
    const [imgUrl, setImgUrl] = useState('')
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
        captcha: ''
    })
    // 验证码
    const { data } = useAxios<captchaRes>('/app/user/login/captcha');
    useEffect(() => {
        if (data?.data) {
            const encoded = encodeURIComponent(data.data)
            .replace(/%([0-9A-F]{2})/g, (_, hex) => 
              String.fromCharCode(parseInt(hex, 16))
            );
          const base64 = btoa(encoded);
          setImgUrl(`data:image/svg+xml;base64,${base64}`);
        }
    }, [data]);
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
                        <h2>{position === 'left' ? '登 录' : '注 册'}</h2>
                        <Form name='login-form' labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} style={{ maxWidth: 300 }} autoComplete="off">
                            <Form.Item
                                label="账号"
                                name="username"
                                rules={[{ required: true, message: '请填写账号!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{ required: true, message: '请填写密码!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="验证码"
                                name="captcha"
                                wrapperCol={{ span: 18 }}
                                labelCol={{ span: 6 }}
                                rules={[{ required: true, message: '请填写验证码!' }]}
                            >
                                <div>
                                    <Input />
                                    <div style={{ display: 'inline-block',background: '#fff' }}>
                                        <img src={imgUrl} alt="验证码" style={{ width: '50px', height: '50px' }} />
                                    </div>
                                </div>
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                    {position === 'left' ? '登录' : '注册'}
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </div>

        </LoginWrapper>
    )
}

