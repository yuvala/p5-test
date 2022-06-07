class ColorHelper {
    private static getColorVector(c: p5.Color) {
        return createVector(
            red(c),
            green(c),
            blue(c)
        );
    }

    public static rainbowColorBase() {
        return [
            color('red'),
            color('orange'),
            color('yellow'),
            color('green'),
            color(38, 58, 150), // blue
            color('indigo'),
            color('violet')
        ];
    }

    public static getColorsArray(total: number, baseColorArray: p5.Color[] = null): p5.Color[] {
        if (baseColorArray == null) {
            baseColorArray = ColorHelper.rainbowColorBase();
        }
        let rainbowColors = baseColorArray.map(x => this.getColorVector(x));;

        let colors = new Array<p5.Color>();
        for (let i = 0;i < total;i++) {
            const colorPosition = i / total;
            var scaledColorPosition = colorPosition * (rainbowColors.length - 1);

            const colorIndex = Math.floor(scaledColorPosition);
            var colorPercentage = scaledColorPosition - colorIndex;

            var nameColor = this.getColorByPercentage(rainbowColors[colorIndex],
                rainbowColors[colorIndex + 1],
                colorPercentage);

            colors.push(color(nameColor.x, nameColor.y, nameColor.z))
        }

        return colors;
    }

    private static getColorByPercentage(firstColor: p5.Vector, secondColor: p5.Vector, percentage: number) {
        // assumes colors are p5js vectors
        const firstColorCopy = firstColor.copy();
        const secondColorCopy = secondColor.copy();

        var deltaColor = secondColorCopy.sub(firstColorCopy);
        var scaledDeltaColor = deltaColor.mult(percentage);
        return firstColorCopy.add(scaledDeltaColor);
    }
}