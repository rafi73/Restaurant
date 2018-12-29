<template>
    <aside class="app-side" id="app-side">
        <div class="side-content ">
            <div class="user-profile">
                <img src="/themes/backend/unity/img/user.png" class="profile-thumb" alt="User Thumb">
                <h6 class="profile-name">Sofia Vergara</h6>
                <ul class="profile-actions">
                    <li>
                        <a href="#">
                            <i class="icon-social-skype"></i>
                            <span class="count-label red"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon-social-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="login.html">
                            <i class="icon-export"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <nav class="side-nav">
                <ul class="unifyMenu" id="unifyMenu">
                    <sidebar-menu-item :routes='routes'></sidebar-menu-item>
                   
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
import menuItem from './sidebarMenuItem'
export default {
    name: 'sidebar',
    components: {
        'sidebar-menu-item': menuItem
    },
    computed:{
        routes(){
            return this.$routes[0].children
        }
    },
    mounted() {
        this.mountSidebar()
    },
    methods:{
        mountSidebar(){
            if ($(window).width() < 992) {
                $('#app-side').onoffcanvas('hide');
            } else {
                $('#app-side').onoffcanvas('show');
            }

            $('.side-nav .unifyMenu').unifyMenu({ toggle: true });

            $('#app-side-hoverable-toggler').on('click', function () {
                $('.app-side').toggleClass('is-hoverable');
                $(undefined).children('i.fa').toggleClass('fa-angle-right fa-angle-left');
            });

            $('#app-side-mini-toggler').on('click', function () {
                $('.app-side').toggleClass('is-mini');
                $("#app-side-mini-toggler i").toggleClass('icon-sort icon-menu5');
            });

            $('#onoffcanvas-nav').on('click', function () {
                $('.app-side').toggleClass('left-toggle');
                $('.app-main').toggleClass('left-toggle');
                $("#onoffcanvas-nav i").toggleClass('icon-sort icon-menu5');
            });		

            $('.onoffcanvas-toggler').on('click', function () {
                $(".onoffcanvas-toggler i").toggleClass('icon-chevron-thin-left icon-chevron-thin-right');
            });
        }
    }
}
</script>
