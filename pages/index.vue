<script setup lang="ts">
  import{useModalsToggle} from '../stores/modalsToggle'
  const store = useModalsToggle()
</script>
<template>
  <div class="hero section">
    <div class="wrapper">
      <div class="left">
        <div class="title">Advanced Metrics for Short Form Video</div>
        <div class="text">
          Analyze TikToks, Reels & Shorts at a glance for any account
        </div>
        <div class="cta">
          <div class="select-container">
            <select class="select">
              <option value="1">georgewhite</option>
              <option value="2">2</option>
            </select>
            <div class="tag">Shorts</div>
          </div>
          <button class="button">Generate</button>
        </div>
      </div>
      <div class="right">
        <div class="video-container">
          <div class="video-info">
            <div class="item">
              <div class="item-wrapper">
                <img class="img" src="@/assets/images/dollar.svg"/>
                <div class="item-text">
                  <div class="title">$2.3K+</div>
                  <div class="text">ECF</div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-wrapper">
                <img class="img" src="@/assets/images/stat.svg"/>
                <div class="item-text">
                  <div class="title">
                    <span>18.3%</span>
                    <img class="caret" src="@/assets/images/caret.svg"/>
                  </div>
                  <div class="text">Engagement</div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-wrapper">
                <img class="img" src="@/assets/images/play.svg"/>
                <div class="item-text">
                  <div class="title">2.4M</div>
                  <div class="text">Views</div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-wrapper">
                <img class="img" src="@/assets/images/like.svg"/>
                <div class="item-text">
                  <div class="title">25.3K</div>
                  <div class="text">Likes</div>
                </div>
              </div>
            </div>
          </div>
          <div class="user-info">
            <div class="info-text">
              <div class="title">
                <img class="avatar" src="@/assets/images/avatar.png"/>
                <span>@georgewhite</span>
              </div>
              <div class="text-container flex">
                <div class="text">66 following</div>
                <div class="text">32 followers</div>
              </div>
            </div>
            <div class="tag">Shorts</div>
          </div>
          <video autoplay loop muted>
            <source src="@/assets/videos/video.mp4" type="video/mp4" />
          </video>
          <img class="decor1" src="@/assets/images/decor1.svg"/>
          <img class="decor2" src="@/assets/images/decor2.svg"/>
          <img class="decor3" src="@/assets/images/decor3.svg"/>
        </div>
      </div>
    </div>
  </div>
  <div class="features section">
    <div class="wrapper">
      <img class="decor4" src="@/assets/images/decor4.svg"/>
      <div class="title mob">Features</div>
      <div class="list">
        <div class="item">
          <img class="img" src="@/assets/images/feature1.svg"/>
          <div class="text text-big">Get More Stats</div>
          <div class="text text-small">
            Track Engagement, Estimated Revenue, and other stats to get valuable insight and optimize your content.
          </div>
        </div>
        <div class="item">
          <img class="img" src="@/assets/images/feature2.svg"/>
          <div class="text text-big">Track Your Competitors</div>
          <div class="text text-small">
            Easily add your competitor accounts to get a better idea what is working for their content.
          </div>
        </div>
        <div class="item">
          <img class="img" src="@/assets/images/feature3.svg"/>
          <div class="text text-big">Video Recommendations</div>
          <div class="text text-small">
            Get daily recommendations on how to improve your videos. From using certain hashtags to sounds and description.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pricing section">
    <div class="wrapper">
      <div class="title">Pricing</div>
      <div class="list">
        <div class="item">
          <div class="top">
            <img class="img" src="@/assets/images/pricing1.svg"/>
            <div class="item-title title">Starter</div>
            <div class="item-text text">
              Sed euismod ante at dui varius, in rhoncus justo laoreet. Sedart accumsan fringilla pulvinar.
            </div>
            <div class="price">
              <div class="title">$0</div>
              <div class="text">/month</div>
            </div>
            <ul class="benefit-list">
              <li class="list__item text">
                Estimated creator earnings
              </li>
              <li class="list__item text">
                One social media account
              </li>
              <li class="list__item text">
                One free refresh per day
              </li>
            </ul>
          </div>
          <button class="button" @click="store.openRegisterModal">Join for Free</button>
        </div>
        <div class="item">
          <div class="top">
            <img class="img" src="@/assets/images/pricing2.svg"/>
            <div class="item-title title">Professional</div>
            <div class="item-text text">
              Sed euismod ante at dui varius, in rhoncus justo laoreet. Sedart accumsan fringilla pulvinar.
            </div>
            <div class="price">
              <div class="title">$10</div>
              <div class="text">/month</div>
            </div>
            <ul class="benefit-list">
              <li class="list__item text">
                Estimated Creator Earnings
              </li>
              <li class="list__item text">
                Advanced Analytics
              </li>
              <li class="list__item text">
                Report Generation
              </li>
              <li class="list__item text">
                Unlimited Accounts
              </li>
              <li class="list__item text">
                Four free refreshes per day
              </li>
            </ul>
          </div>
          <button class="button" @click="store.openSignInModal">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  <div class="total">
    <div class="wrapper">
      <div class="title">12,887,991,764</div>
      <div class="title title-shadow">12,887,991,764</div>
      <div class="text">videos and counting..</div>
    </div>
  </div>
  <div class="nav section">
    <div class="wrapper">
      <ul class="list">
        <li class="item">
          <NuxtLink to="/terms" class="text">Terms of Service</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink to="/privacy" class="text">Privacy Policy</NuxtLink>
        </li>
        <li class="item">
          <a class="text" href="mailto:support@gmail.com">Support</a>
        </li>
        <li class="item">
          <a class="text" href="mailto:contact@gmail.com">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<style>
@import '@/assets/styles/landing.scss';
</style>
