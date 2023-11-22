function foo()
{
    console.log('foo')
}
foo()
function bar()
{
    console.log('bar')
    foo()
}
bar()