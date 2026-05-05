// function add(a: number, b: number): number {
//     return a + b
// }

// function add(a: string, b: string): string {
//     return a + b
// }

// function add<T>(a: T, b: T): T {
//     return (a as any) + b
// }

// add<number>(4, 5)
// add<string>('Hello', 'World')

function add<T extends number | string>(a: T, b: T): T {
    return (a as any) + b
}

add(4, 5)
add('Hello', 'World')