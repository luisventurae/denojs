const filePath = './text.txt'

// Deno es una clase reservada de denoJs
let file = await Deno.open(filePath)

await Deno.copy(Deno.stdout, file)
file.close()

// Para ejecutar el script: deno run --allow-read files/reader.ts
