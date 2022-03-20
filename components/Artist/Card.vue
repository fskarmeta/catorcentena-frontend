<template>
    <div
        class="w-full flex flex-col gap-x-10 text-center md:text-left md:flex-row items-center md:items-start"
    >
        <ArtistHeader class="md:hidden" />
        <img
            class="border rounded-lg border-gray-900 h-400px w-316px mb-2"
            src="@/assets/images/imagen.jpg"
            alt="projecto"
        />
        <div class="mx-5 md:mx-0">
            <ArtistHeader class="hidden md:block" />
            <p
                class="my-4"
            >Vestibulum porta libero eros, sit amet fringilla nisi pharetra ut. Nunc non luctus nisi, non vehicula leo. Sed at porttitor diam, sit amet sagittis purus. Nunc finibus urna nisl, ut vestibulum metus suscipit in. Aliquam erat volutpat. Mauris venenatis semper diam in tristique. Ut sodales id massa eget consectetur.</p>
            <h2 class="text-2xl mb-4">Radio Shows</h2>
            <p class="underline">Cuarto Menguante #3 con Matías Rivera: 1er Aniversario</p>
            <p class="underline">Cuarto Menguante #3 con Matías Rivera: 1er Aniversario</p>
        </div>
    </div>
</template>