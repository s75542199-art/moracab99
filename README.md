<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ورود | ثبت‌نام | بارمان مرکب کویر</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Tahoma', 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #ef6b00 0%, #d35400 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            direction: rtl;
            padding: 20px;
            position: relative;
            overflow-x: hidden;
        }
        body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(239,107,0,0.15) 0%, transparent 50%);
            pointer-events: none;
        }
        .shape { position: absolute; background: rgba(255,255,255,0.05); border-radius: 50%; pointer-events: none; }
        .shape-1 { width: 300px; height: 300px; top: -100px; left: -100px; }
        .shape-2 { width: 200px; height: 200px; bottom: 50px; right: -50px; }
        .container { width: 100%; max-width: 450px; position: relative; z-index: 10; }
        .logo { text-align: center; margin-bottom: 30px; animation: fadeInDown 0.6s ease; }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        .logo-icon { width: 85px; height: 85px; background: rgba(255,255,255,0.2); border-radius: 25px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 42px; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .logo h1 { color: white; font-size: 28px; text-shadow: 0 2px 10px rgba(0,0,0,0.2); }
        .logo h1 span { background: linear-gradient(135deg, #fff, #ffe0b3); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .logo p { color: rgba(255,255,255,0.85); font-size: 14px; margin-top: 5px; }
        .card { background: rgba(255,255,255,0.98); border-radius: 30px; padding: 35px; box-shadow: 0 25px 50px rgba(0,0,0,0.2); backdrop-filter: blur(10px); animation: fadeInUp 0.6s ease; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .tabs { display: flex; gap: 10px; margin-bottom: 30px; border-bottom: 2px solid #f0f0f0; }
        .tab-btn { flex: 1; background: none; border: none; padding: 12px; font-size: 16px; font-weight: bold; cursor: pointer; color: #999; transition: all 0.3s ease; font-family: inherit; }
        .tab-btn.active { color: #ef6b00; border-bottom: 3px solid #ef6b00; }
        .form { display: none; }
        .form.active { display: block; animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; font-weight: 500; color: #333; font-size: 14px; }
        .form-group input { width: 100%; padding: 12px 15px; border: 2px solid #e0e0e0; border-radius: 15px; font-size: 14px; font-family: inherit; transition: all 0.3s ease; }
        .form-group input:focus { outline: none; border-color: #ef6b00; box-shadow: 0 0 0 3px rgba(239,107,0,0.15); }
        .submit-btn { width: 100%; background: linear-gradient(135deg, #ef6b00, #d35400); color: white; border: none; padding: 14px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; transition: all 0.3s ease; margin-top: 10px; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 20px rgba(239,107,0,0.4); }
        .skip-btn { width: 100%; background: none; border: 1px solid #ddd; color: #666; padding: 12px; border-radius: 30px; font-size: 14px; cursor: pointer; margin-top: 15px; transition: all 0.3s ease; }
        .skip-btn:hover { background: #f5f5f5; border-color: #ef6b00; color: #ef6b00; }
        .toast { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: #27ae60; color: white; padding: 12px 25px; border-radius: 50px; z-index: 2000; animation: slideUp 0.3s ease; box-shadow: 0 5px 20px rgba(0,0,0,0.2); }
        .toast.error { background: #e74c3c; }
        @keyframes slideUp { from { opacity: 0; transform: translateX(-50%) translateY(20px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
    </style>
</head>
<body>
<div class="shape shape-1"></div>
<div class="shape shape-2"></div>

<div class="container">
    <div class="logo">
        <div class="logo-icon"><i class="fas fa-hard-hat"></i></div>
        <h1>بارمان <span>مرکب کویر</span></h1>
        <p>تامین کننده مصالح ساختمانی با کیفیت</p>
    </div>
    <div class="card">
        <div class="tabs">
            <button class="tab-btn active" onclick="showTab('login')">ورود</button>
            <button class="tab-btn" onclick="showTab('register')">ثبت‌نام</button>
        </div>
        
        <div id="loginForm" class="form active">
            <div class="form-group">
                <label><i class="fas fa-user"></i> نام کاربری</label>
                <input type="text" id="loginUsername" placeholder="نام کاربری خود را وارد کنید">
            </div>
            <div class="form-group">
                <label><i class="fas fa-lock"></i> رمز عبور</label>
                <input type="password" id="loginPassword" placeholder="رمز عبور خود را وارد کنید">
            </div>
            <button class="submit-btn" onclick="login()"><i class="fas fa-sign-in-alt"></i> ورود</button>
            <button class="skip-btn" onclick="skipLogin()"><i class="fas fa-arrow-left"></i> ورود بدون حساب (مهمان)</button>
        </div>
        
        <div id="registerForm" class="form">
            <div class="form-group">
                <label><i class="fas fa-user"></i> نام کاربری</label>
                <input type="text" id="regUsername" placeholder="نام کاربری خود را انتخاب کنید">
            </div>
            <div class="form-group">
                <label><i class="fas fa-envelope"></i> ایمیل</label>
                <input type="email" id="regEmail" placeholder="ایمیل خود را وارد کنید">
            </div>
            <div class="form-group">
                <label><i class="fas fa-phone"></i> شماره تماس</label>
                <input type="tel" id="regPhone" placeholder="شماره موبایل">
            </div>
            <div class="form-group">
                <label><i class="fas fa-lock"></i> رمز عبور</label>
                <input type="password" id="regPassword" placeholder="رمز عبور خود را انتخاب کنید">
            </div>
            <div class="form-group">
                <label><i class="fas fa-lock"></i> تکرار رمز عبور</label>
                <input type="password" id="regConfirmPassword" placeholder="رمز عبور را مجدد وارد کنید">
            </div>
            <button class="submit-btn" onclick="register()"><i class="fas fa-user-plus"></i> ثبت‌نام</button>
        </div>
    </div>
</div>

<script>
    function showTab(tab) {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const tabs = document.querySelectorAll('.tab-btn');
        
        if (tab === 'login') {
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
            tabs[0].classList.add('active');
            tabs[1].classList.remove('active');
        } else {
            loginForm.classList.remove('active');
            registerForm.classList.add('active');
            tabs[0].classList.remove('active');
            tabs[1].classList.add('active');
        }
    }
    
    function login() {
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        if (!username || !password) {
            showToast('لطفاً نام کاربری و رمز عبور را وارد کنید', 'error');
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('barman_users')) || {};
        
        if (users[username] && users[username].password === password) {
            localStorage.setItem('barman_logged_in', 'true');
            localStorage.setItem('barman_user', username);
            localStorage.setItem('barman_user_phone', users[username].phone || '');
            showToast(`خوش آمدید ${username} !`);
            setTimeout(() => { window.location.href = 'shop.html'; }, 1000);
        } else {
            showToast('نام کاربری یا رمز عبور اشتباه است', 'error');
        }
    }
    
    function register() {
        const username = document.getElementById('regUsername').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        
        if (!username || !email || !phone || !password) {
            showToast('لطفاً تمام فیلدها را پر کنید', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showToast('رمز عبور و تکرار آن مطابقت ندارند', 'error');
            return;
        }
        
        if (password.length < 4) {
            showToast('رمز عبور باید حداقل ۴ کاراکتر باشد', 'error');
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('barman_users')) || {};
        
        if (users[username]) {
            showToast('این نام کاربری قبلاً ثبت شده است', 'error');
            return;
        }
        
        users[username] = {
            password: password,
            email: email,
            phone: phone,
            registerDate: new Date().toLocaleDateString('fa-IR')
        };
        
        localStorage.setItem('barman_users', JSON.stringify(users));
        localStorage.setItem('barman_logged_in', 'true');
        localStorage.setItem('barman_user', username);
        localStorage.setItem('barman_user_phone', phone);
        
        showToast(`ثبت‌نام با موفقیت انجام شد! خوش آمدید ${username}`);
        setTimeout(() => { window.location.href = 'shop.html'; }, 1000);
    }
    
    function skipLogin() {
        localStorage.setItem('barman_logged_in', 'true');
        localStorage.setItem('barman_user', 'مهمان');
        localStorage.setItem('barman_user_phone', '');
        showToast('به عنوان مهمان وارد شدید');
        setTimeout(() => { window.location.href = 'shop.html'; }, 1000);
    }
    
    function showToast(msg, type = 'success') {
        const toast = document.createElement('div');
        toast.className = 'toast';
        if (type === 'error') toast.classList.add('error');
        toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${msg}`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2500);
    }
    
    // چک کردن اگر کاربر قبلاً وارد شده بود
    function checkAlreadyLoggedIn() {
        if (localStorage.getItem('barman_logged_in') === 'true') {
            window.location.href = 'shop.html';
        }
    }
    
    checkAlreadyLoggedIn();
</script>
</body>
</html>
