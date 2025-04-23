<script lang="ts">
    let counter = $state(0);

    function increment() {
        counter += 1;
    }
</script>

<button onclick={increment}>Value is {counter}</button>
