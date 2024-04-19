<script lang="ts">
	let { name = '' } = $props();
</script>

<span class="icon">{name}</span>

<style>
	.icon {
		font-family: var(--font-icon);
		font-size: 16px;
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}
</style>
