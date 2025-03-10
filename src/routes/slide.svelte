<script lang="ts">
	import { slide } from 'svelte/transition';
</script>

<div transition:slide class="duration-1000">
	<slot />
</div>
