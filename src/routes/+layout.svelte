<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<div class="relative mx-auto min-h-screen max-w-4xl">
	<slot></slot>

	<div class="h-32" />
	<footer class="absolute bottom-0 flex h-32 w-full flex-col items-center justify-center gap-2">
		<p class="max-w-xl text-sm font-medium leading-none text-muted-foreground">@thapasijan171</p>
	</footer>
</div>
