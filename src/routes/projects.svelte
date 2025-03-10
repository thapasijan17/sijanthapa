<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Button } from '$lib/components/ui/button';
	import { ExternalLink, Github, Star } from 'lucide-svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { onMount } from 'svelte';

	interface Project {
		title: string;
		description: string;
		githubRepo: string;
		link?: string;
		logo?: string;
		images?: string[];
		tags?: string[];
	}

	async function getDescription(githubRepo: string): Promise<string> {
		const response = await fetch(`https://api.github.com/repos/${githubRepo}`);
		const data = await response.json();
		return data.description;
	}

	let projects: Project[] = [
		{
			title: 'NixOS',
			description:
				'NixOs dotfiles for a desktop environment. It includes a lot of packages and configurations w/hyprland, home-manager and more.',
			logo: 'https://github.com/thapasijan17/NixOS/blob/main/.github/assets/nixos-logo.png?raw=true',
			images: [
				'/img/core/nixdemo1.png',
				'/img/core/nixdemo3.png',
				'/img/core/nixdemo2.png'
			],
			githubRepo: 'thapasijan17/NixOS',
			tags: ['nixos', 'desktop', 'hyprland', 'home-manager']
		},
		{
			title: 'Nixy',
			description:
				'Nixy is a Hyprland NixOS configuration with home-manager, secrets and custom theming all in one place. Its a simple way to your system configuration and dotfiles.',
			logo: '/img/core/project/logo.png',
			images: [
				'/img/core/project/pro22.png',
				'/img/core/project/pro33.png',
				'/img/core/project/pro44.png'
				],
			githubRepo: 'NixyHub/Nixy',
			tags: ['nix', 'shell', 'dotfiles', 'kernal']
		},
	];

</script>

<h1 class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
	Projects
</h1>

<div class="my-10 grid w-full grid-cols-1 justify-around gap-5 md:grid-cols-2">
	{#each projects as project}
		<Card.Root class="w-full transition-shadow duration-300 hover:shadow-lg">
			<Card.Header class="flex-row items-center gap-5">
				{#if project.logo}
					<img
						src={project.logo}
						alt={project.title + ' logo'}
						class="w-10 rounded-md object-cover"
					/>
				{/if}
				<div class="flex flex-col gap-1.5">
					<Card.Title
						><span class="text-muted-foreground">thapasijan17/</span>{project.title}</Card.Title
					>
					<Card.Description>
						{project.description}
					</Card.Description>
				</div>
			</Card.Header>
			{#if project.images}
				{#if project.images.length === 1}
					<Card.Content>
						<img
							src={project.images[0]}
							alt={project.title + ' image: '}
							class="w-full rounded-md object-cover"
						/>
					</Card.Content>
				{:else}
					<Card.Content class="mx-10">
						<Carousel.Root
							opts={{
								loop: true
							}}
						>
							<Carousel.Content>
								{#each project.images as image}
									<Carousel.Item>
										<img
											src={image}
											alt={project.title + ' image: ' + image}
											class="w-full rounded-md object-cover"
										/>
									</Carousel.Item>
								{/each}
							</Carousel.Content>
							<Carousel.Previous />
							<Carousel.Next />
						</Carousel.Root>
					</Card.Content>
				{/if}
			{/if}

			{#if project.tags}
				<Card.Content class="flex flex-wrap gap-2">
					{#each project.tags as tag}
						<Badge variant="outline">{tag}</Badge>
					{/each}
				</Card.Content>
			{/if}
			<Card.Footer class="flex flex-wrap gap-2">
				<Tooltip.Root>
					<Tooltip.Trigger>
						<a href={'https://github.com/' + project.githubRepo}>
							<Button size="icon" variant="outline">
								<Github />
							</Button>
						</a>
					</Tooltip.Trigger>
					<Tooltip.Content>{project.title} github repo</Tooltip.Content>
				</Tooltip.Root>

				{#if project.link}
					<Tooltip.Root>
						<Tooltip.Trigger>
							<a href={project.link}>
								<Button size="icon" variant="outline">
									<ExternalLink />
								</Button>
							</a>
						</Tooltip.Trigger>
						<Tooltip.Content>{project.title} link</Tooltip.Content>
					</Tooltip.Root>
				{/if}
			</Card.Footer>
		</Card.Root>
	{/each}
</div>
