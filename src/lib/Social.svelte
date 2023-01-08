
<script>
    import {siGithub,siInstagram,siYoutube,siLinkedin,siMastodon} from 'simple-icons';
	import SocialComponent from './Social_Component.svelte';
</script>

<div class="m-auto block w-max">
    <div class="inline-block m-8 mb-0 hover:scale-[105%] transition-transform">
        <SocialComponent redirect_uri="https://instagram.com/lanoe_35" icon={siInstagram}></SocialComponent>
    </div>
    <div class="inline-block m-8 mb-0 hover:scale-[105%] transition-transform">
        <SocialComponent redirect_uri="https://youtube.com/@aquabx" icon={siYoutube}></SocialComponent>
    </div>
    <div class="inline-block m-8 mb-0 hover:scale-[105%] transition-transform">
        <SocialComponent redirect_uri="https://mastodon.top/@aquabx" icon={siMastodon}></SocialComponent>
    </div>
    <div class="inline-block m-8 mb-0 hover:scale-[105%] transition-transform">
        <SocialComponent redirect_uri="https://linkedin.com/in/tom-chauvel/" icon={siLinkedin}></SocialComponent>
    </div>
    <div class="inline-block m-8 mb-0 hover:scale-[105%] transition-transform">
        <SocialComponent redirect_uri="https://github.com/aquabx" icon={siGithub}></SocialComponent>
    </div>
</div>