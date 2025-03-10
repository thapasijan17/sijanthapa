<script>
	import { page } from '$app/stores';
</script>

<div class="flex w-full items-center justify-center pt-14 text-center">
	<div>
		<h1 class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
			Woops
		</h1>
		<p class="text-sm font-medium leading-none">(ノ ゜Д゜)ノ ︵ ┻━┻</p>
		{#if $page.status === 404}
			<img src="/img/ResponseCode/404.png" alt="404" />
		{:else if $page.status === 403}
			<img src="/img/ResponseCode/403.png" alt="403" />
		{:else if $page.status === 418}
			<img src="/img/ResponseCode/418.png" alt="418" />
		{:else if $page.status === 500}
			<img src="/img/ResponseCode/500.png" alt="500" />
		{:else if $page.status === 503}
			<img src="/img/ResponseCode/503.png" alt="503" />
		{/if}
	</div>
</div>
