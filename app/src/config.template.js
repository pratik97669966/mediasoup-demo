'use strict';

module.exports = {
    // Branding and customizations require a license: https://codecanyon.net/item/mirotalk-p2p-webrtc-realtime-video-conferences/38376661
    brand: {
        app: {
            name: 'Q UP App Video Consultation',
            title: 'Q UP App Video Consultation<br />Free browser based Real-time video calls.<br />Simple, Secure, Fast.',
            description:
                'Start your next video call with a single click. No download, plug-in, or login is required. Just get straight to talking, messaging, and sharing your screen.',
        },
        site: {
            landingTitle: 'Q UP App Video Consultation',
            newCallTitle: 'Q UP App Video Consultation',
            loginTitle: 'Q UP App Video Consultation',
            clientTitle: 'Q UP App Video Consultation',
            privacyPolicyTitle: 'Q UP App Video Consultation - privacy and policy.',
            stunTurnTitle: 'Test Stun/Turn Servers.',
            notFoundTitle: 'Q UP App Video Consultation - 404 Page not found.',
            shortcutIcon: '../images/logo.png',
            appleTouchIcon: '../images/logo.png',
        },
        html: {
            features: true,
            browsers: true,
            teams: true, // please keep me always true ;)
            tryEasier: true,
            poweredBy: true,
            sponsors: true,
            advertisers: true,
            footer: true,
        },
        //...
    },
    /**
     * Configuration for controlling the visibility of buttons in the MiroTalk P2P client.
     * Set properties to true to show the corresponding buttons, or false to hide them.
     * captionBtn, showSwapCameraBtn, showScreenShareBtn, showFullScreenBtn, showVideoPipBtn, showDocumentPipBtn -> (auto-detected).
     */
    buttons: {
        main: {
            showShareRoomBtn: true, // For guests
            showHideMeBtn: true,
            showAudioBtn: true,
            showVideoBtn: true,
            showScreenBtn: true, // autodetected
            showRecordStreamBtn: true,
            showChatRoomBtn: true,
            showCaptionRoomBtn: true,
            showRoomEmojiPickerBtn: true,
            showMyHandBtn: true,
            showWhiteboardBtn: true,
            showSnapshotRoomBtn: true,
            showFileShareBtn: true,
            showMySettingsBtn: true,
            showAboutBtn: true, // Please keep me always true, Thank you!
        },
        chat: {
            showTogglePinBtn: true,
            showMaxBtn: true,
            showSaveMessageBtn: true,
            showMarkDownBtn: true,
            showChatGPTBtn: true,
            showFileShareBtn: true,
            showShareVideoAudioBtn: true,
            showParticipantsBtn: true,
        },
        caption: {
            showTogglePinBtn: true,
            showMaxBtn: true,
        },
        settings: {
            showMicOptionsBtn: true,
            showTabRoomPeerName: true,
            showTabRoomParticipants: true,
            showTabRoomSecurity: true,
            showTabEmailInvitation: true,
            showCaptionEveryoneBtn: true,
            showMuteEveryoneBtn: true,
            showHideEveryoneBtn: true,
            showEjectEveryoneBtn: true,
            showLockRoomBtn: true,
            showUnlockRoomBtn: true,
        },
        remote: {
            showAudioVolume: false,
            audioBtnClickAllowed: false,
            videoBtnClickAllowed: false,
            showKickOutBtn: false,
            showSnapShotBtn: false,
            showFileShareBtn: false,
            showShareVideoAudioBtn: false,
            showPrivateMessageBtn: false,
            showZoomInOutBtn: false,
            showVideoFocusBtn: false,
        },
        local: {
            showSnapShotBtn: false,
            showVideoCircleBtn: false,
            showZoomInOutBtn: false,
        },
        whiteboard: {
            whiteboardLockBtn: false,
        },
    },
};
