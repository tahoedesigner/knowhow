<template>
    <div>
        Page4
        <hr>
        <table style="width:100%">
            <tr>
                <td><router-view name="sidebar"/></td>
                <td><router-view name="sidemain"/></td>
            </tr>
        </table>
    </div>
</template>