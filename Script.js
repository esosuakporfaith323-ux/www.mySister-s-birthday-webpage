  alert("Welcome! 🎂");
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // GET HTML ELEMENTS
    // ===============================

    const welcome = document.getElementById("welcome");
    const specialIntro = document.getElementById("specialIntro");
    const gift = document.getElementById("gift");

    const openGift = document.getElementById("openGift");

    const chapterTitle = document.getElementById("chapterTitle");
    const chapterText = document.getElementById("chapterText");
    const nextBtn = document.getElementById("nextBtn");


    // ===============================
    // CHECK HTML ELEMENTS
    // ===============================

    if (!welcome || !specialIntro || !gift ||
        !openGift || !chapterTitle ||
        !chapterText || !nextBtn) {

        console.error(
            "Some HTML elements are missing. Check the IDs in your HTML."
        );

        return;
    }


    // ===============================
    // CHAPTERS
    // ===============================

    const chapters = [

        {
            title: "🎂 Happy Birthday",

            text: `Happy Birthday, Faith! 🎉

Today is more than just another day on the calendar. It is a celebration of your life, your journey, your strength, and the beautiful person you continue to become.

On this special day, I wanted to give you something different.

Instead of buying an ordinary gift, I decided to create one with my own hands.

Every line on this page was written with love, and every part of this little website was made especially for you.

So smile, relax, and enjoy this little surprise.

Because today is all about you. ❤️`,

            button: "💌 A Letter to My Sister →"
        },


        {
            title: "💌 A Letter to My Sister",

            text: `Dear Big Sis,

There are some things that are easier to write than to say, and this is one of them.

Having you as my sister has been one of God's greatest blessings in my life.

You've laughed with me, encouraged me, corrected me, prayed for me, and stood beside me.

Even when we disagreed or I made mistakes, your love never disappeared.

That is something I will always treasure.

Thank you for being my sister.

Thank you for believing in me.

Thank you for loving me.

And thank you for simply being you. ❤️`,

            button: "🌸 The Little Things →"
        },


        {
            title: "🌸 The Little Things",

            text: `Dear Big Sis,

This is my own little way of saying Happy Birthday.

You mean so much to me, and I want you to know how deeply I admire the person you are.

I admire your strength, your kindness, your patience, and the quiet courage you carry every day.

You've gone through school, faced difficult moments, graduated successfully, and continued moving forward even when things weren't easy.

You remained strong, trusted in God, and kept believing that better days were ahead.

Your name is Faith, and I truly believe it wasn't given to you by mistake.

You chose faith over fear, hope over doubt, and perseverance over giving up.

Never forget the incredible woman you are.

No matter what life throws at you, stand tall. Stand firm. Face every challenge with courage.

Thank you for being such an amazing sister.

You've supported me in more ways than I could ever explain, and I will always appreciate everything you've done for me.

Happy Birthday, my wonderful sister.

With all my love,

— Peace ❤️`,

            button: "🌷 My Wishes for You →"
        },


        {
            title: "🌷 My Wishes for You",

            text: `As you begin another year of your life, my heart is filled with prayers for you.

May God continue to guide every step you take and bless every decision you make.

May He open doors of opportunity that no one can close and surround you with people who genuinely love and support you.

May your dreams become reality, your hard work be rewarded, and your heart always find peace.

Whenever challenges come, may God give you the wisdom to overcome them and the strength to keep moving forward.

May your smile never fade, your hope never grow dim, and your faith in God become even stronger.

May this new age bring you joy, love, success, answered prayers, and countless beautiful memories.

Happy Birthday once again, my amazing sister. ❤️`,

            button: "✨ One Last Thing... →"
        },


        {
            title: "✨ One Last Thing...",

            text: `This isn't the most expensive gift you'll receive.

It isn't wrapped in paper.

It isn't sitting inside a box.

It's simply something I built with love, one line of code at a time.

And behind every line of code is a little reminder of how much you mean to me.

Happy Birthday, Faith.

No matter where life takes us, you'll always be my big sister.

I love you. ❤️

— Peace`,

            button: "💖 Start Again"
        }

    ];


    // ===============================
    // CURRENT CHAPTER
    // ===============================

    let currentChapter = 0;


    // ===============================
    // OPEN THE GIFT
    // ===============================

    openGift.addEventListener("click", function () {

        welcome.style.opacity = "0";

        setTimeout(function () {

            welcome.classList.add("hidden");

            specialIntro.classList.remove("hidden");

            specialIntro.style.opacity = "0";

            setTimeout(function () {
                specialIntro.style.opacity = "1";
            }, 100);


            setTimeout(function () {

                specialIntro.style.opacity = "0";

                setTimeout(function () {

                    specialIntro.classList.add("hidden");

                    gift.classList.remove("hidden");

                    gift.style.opacity = "0";

                    showChapter();

                    setTimeout(function () {
                        gift.style.opacity = "1";
                    }, 100);

                }, 1000);

            }, 2500);

        }, 1200);

    });


    // ===============================
    // SHOW CHAPTER
    // ===============================

    function showChapter() {

        const chapter = chapters[currentChapter];
        gift.setAttribute("data-page", currentChapter);

        chapterTitle.textContent = chapter.title;

        chapterText.innerHTML =
            chapter.text.replace(/\n/g, "<br><br>");

        // BUTTON SHOWS NEXT TITLE

        nextBtn.textContent = chapter.button;


        // ===============================
        // CHANGE BACKGROUND
        // ===============================

        if (currentChapter === 0) {

            gift.style.background =
                "linear-gradient(135deg, #3A0CA3, #1D3557)";

        }

        else if (currentChapter === 1) {

            gift.style.background =
                "linear-gradient(135deg, #5A189A, #240046)";

        }

        else if (currentChapter === 2) {

            gift.style.background =
                "linear-gradient(135deg, #0B3D91, #1E1E62)";

        }

        else if (currentChapter === 3) {

            gift.style.background =
                "linear-gradient(135deg, #0B6E4F, #081229)";

        }

        else if (currentChapter === 4) {

            gift.style.background =
                "linear-gradient(135deg, #000000, #6B4E00)";

        }

    }


    // ===============================
    // NEXT BUTTON
    // ===============================

    nextBtn.addEventListener("click", function () {

        gift.style.opacity = "0";

        setTimeout(function () {

            if (currentChapter < chapters.length - 1) {

                currentChapter++;

            } else {

                currentChapter = 0;

            }

            showChapter();

            gift.style.opacity = "1";

        }, 800);

    });


    // ===============================
    // TRANSITIONS
    // ===============================

    welcome.style.transition =
        "opacity 1.2s ease";

    specialIntro.style.transition =
        "opacity 1s ease";

    gift.style.transition =
        "opacity 0.8s ease";
