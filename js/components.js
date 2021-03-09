class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="container">
                    <div class="wrapper-navbar">
                        <div class="navbar-info-user">
                            <h2>CREDIT : 12,053.00</h2>
                            <h2>TURNOVER : 3,050.00</h2>
                        </div>
                        <div class="navbar-offset" id="hamburger" onclick="openSidebar()">
                            <i class="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </nav>
        `
    }
}

class BottomBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="bottom-bar">
            <ul class="menu">
                <li><a href=""><img src="./assets/icon-bottombar/wallet.png" alt="Wallet">กระเป๋าเงิน</a></li>
                <li><a href=""><img src="./assets/icon-bottombar/money.png" alt="Money">ฝาก-ถอน</a></li>
                <li><a href=""><img src="./assets/icon-bottombar/YTB Logo - Metal.png" alt="Logo">เข้าเล่นเกม</a></li>
                <li><a href=""><img src="./assets/icon-bottombar/giftbox.png" alt="Gift">โปรโมชัน</a></li>
                <li><a href=""><img src="./assets/icon-bottombar/call-center.png" alt="Call Center">ติดต่อแอดมิน</a></li>
            </ul>
        </section>
        `
    }
}

class SideBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="wrapper-sidebar">
        <div onclick="closeSidebar()" class="bg-sidebar" id="bg-sidebar"></div>
        <div class="sidebar" id="sidebar">
            <ul class="menu-sidebar">
                <li>
                    <a href="#" class="game-btn">เข้าเล่นเดิมพัน
                        <span onclick="openSubmenuGame()" class="fas fa-caret-down btn-open-show-game"></span>
                    </a>
                    <ul class="gmae-show">
                        <li><a href="live-casino.html">คาสิโนสด</a></li>
                        <li><a href="#">สล๊อตออนไลน์</a></li>
                        <li><a href="#">เกมส์ไพ่</a></li>
                        <li><a href="#">พนันกีฬา</a></li>
                    </ul>
                </li>
                <li><a href="">สรุปการเล่น</a></li>
                <li><a href="">กระเป๋าเงินของฉัน</a></li>
                <li><a href="">ฝาก-ถอน</a></li>
                <li><a href="">โปรโมชั่น</a></li>
                <li><a href="">ติดต่อแอดมิน</a></li>
                <li><a href="">VIP Service</a></li>
                <li><a href="">ข้อมูลของฉัน</a></li>
            </ul>
        </div>
    </div>
        `
    }
}

customElements.define('main-navbar', Navbar)
customElements.define('main-bottombar', BottomBar)
customElements.define('main-sidebar', SideBar)