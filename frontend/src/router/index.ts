// import RoomEntranceSearchInputComponentVue from "@components/atoms/root-entrance/RoomEntranceSearchInputComponent.vue";
// import RoomEntranceThumbnailComponentVue from "@components/atoms/room-entrance/RoomEntranceThumbnailComponent.vue";
// import RoomEntranceInfoComponentVue from "@components/atoms/room-entrance/RoomEntranceInfoComponent.vue";
// import RoomEntranceNameComponentVue from "@components/atoms/room-entrance/RoomEntranceNameComponent.vue";
import RoomEntranceComponentVue from "@components/molecules/room-entrance/RoomEntranceComponent.vue";
// import RoomEntranceBoardComponentVue from "@components/organisms/room-entrance/RoomEntranceBoardComponent.vue";
// import RoomEntranceSearchInputComponentVue from "@components/atoms/room-entrance/RoomEntranceSearchInputComponent.vue";
// import RoomEntranceSearchImageComponentVue from "@components/atoms/room-entrance/RoomEntranceSearchImageComponent.vue";
// import ContainerComponentVue from "@components/atoms/common/ContainerComponent.vue";
// import UserProfileImageComponentVue from "@components/atoms/common/UserProfileImageComponent.vue";
// import UserVideoComponentVue from "@components/atoms/room-inside/UserVideoComponent.vue";
import RoomVideoComponentVue from "@components/organisms/room-inside/RoomVideoComponent.vue";
// import MenuTabMicIconComponent from "@components/molecules/room-inside/icon/MenuTabMicIconComponent.vue";
// import MenuTabCamIconComponent from "@components/molecules/room-inside/icon/MenuTabCamIconComponent.vue";
// import MenuTabDocIconComponent from "@components/molecules/room-inside/icon/MenuTabDocIconComponent.vue";
import MenuTabComponent from "@components/organisms/room-inside/MenuTabComponent.vue";
// import DebateTitleTabComponent from "@components/molecules/room-inside/DebateTitleTabComponent.vue";
// import ModalInputComponent from "@components/atoms/common/ModalInputComponent.vue";
// import ModalInputBoxComponent from "@components/molecules/room-entrance/ModalInputBoxComponent.vue";
// import ModalRadioButtonComponent from "@components/atoms/common/ModalRadioButtonComponent.vue";
// import RoomMakeModalComponent from "@components/organisms/room-entrance/RoomMakeModalComponent.vue";
// import ModalAccessModifierComponent from "@components/molecules/room-entrance/ModalAccessModifierComponent.vue";
// import ButtonComponent from "@components/atoms/common/ButtonComponent.vue";
// import ButtonComponent2 from "@components/atoms/common/ButtonComponent2.vue";
// import ButtonComponent3 from "@components/atoms/common/ButtonComponent3.vue";
// import DebateMemoComponent from "@components/atoms/room-inside/DebateMemoComponent.vue";
// import DebateMemoModalComponent from "@components/molecules/room-inside/DebateMemoModalComponent.vue";
import DebateTimerComponent from "@components/organisms/room-inside/DebateTimerComponent.vue";
import UserVideoComponent from "@components/atoms/room-inside/UserVideoComponent.vue";

import RoomInsidePageComponent from "@components/templates/room-inside/RoomInsidePageComponent.vue";
import RoomEntrancePageComponentVue from "@components/templates/room-entrance/RoomEntrancePageComponent.vue";

import RoomInsideView from "@components/views/RoomInsideView.vue";

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store/index";

import CommonModal from "@components/atoms/common/CommonModal.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/test",
    name: "test",
    component: MenuTabComponent,
  },
  {
    path: "/entrance",
    name: "RoomEntrancePage",
    component: RoomEntrancePageComponentVue,
    meta: { auth: true },
  },
  {
    path: "/room",
    name: "RoomInsidePage",
    component: RoomInsideView,
    meta: { auth: true },
  },
  {
    path: "/",
    redirect: "/main",
    // meta: { auth: true }, //????????? ??????????????? ?????? ????????? ??????, ????????????????????? path??? ??????????????????
  },
  {
    path: "/login",
    name: "memberLogIn",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/signup",
    name: "memberSignUp",
    component: () => import("@/views/SignupPage.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/MainPage_2.vue"),
    // meta: { auth: true }, //????????? ??????????????? ?????? ????????? ??????
  },
  {
    path: "/room/:joinCode",
    component: () => import("@/views/RoomPage.vue"),
    name: "Room",
    meta: { auth: true }, //????????? ??????????????? ?????? ????????? ??????
  },
  {
    path: "/:catchAll(.*)", // vue3????????? ??????????????? ??????
    component: () => import("@/views/NotFoundPage.vue"),
  },
  {
    path: "/debate-board/",
    name: "debateBoards",
    component: () => import("@/views/BoardsPage.vue"),
    meta: { auth: true }, //????????? ??????????????? ?????? ????????? ??????
  },
  {
    path: "/debate-board/:board_no",
    name: "debateBoard",
    component: () => import("@/views/BoardDetail.vue"),
    meta: { auth: true }, //????????? ??????????????? ?????? ????????? ??????
  },
  {
    path: "/boardwrite",
    name: "debateWrite",
    component: () => import("@/views/BoardWrite.vue"),
    meta: { auth: true }, //????????? ??????????????? ?????? ????????? ??????
  },
  {
    path: "/userpage",
    name: "userPage",
    component: () => import("@/views/MyPage.vue"),
    meta: { auth: true }, //????????? ??????????????? ?????? ????????? ??????
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// ????????? ??????????????? ??????
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    // ????????? ?????? ????????????
    // alert("????????? ???????????????");
    next("/login");
    return;
  }
  next();
});

export default router;
