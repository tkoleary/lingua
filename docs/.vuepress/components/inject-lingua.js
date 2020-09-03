<template>
	<p class="lingua">
		{{ msg }}
	</p>
</template>

<script>
export default {
	data () {
		return {
			msg: 'This is lingua'
		}
	}
}
</script>
<style lang="css">
	@import "../lingua/lingua.min.css"
</style>
