<colour>

    <div class="colour mr-4 { isActive: isActive }" style={ styles } onclick='{ changeLayer }'></div>

    <script>
        let { layername, activelayers } = this.parent.opts

        this.isActive = (activelayers[layername] === this.layerSrc) ? true : false;

        if (this.thumbnail !== '') {
            this.styles = {
                'background': `url(assets/images/thumbs/${this.thumbnail}.png) no-repeat 50% 50% / cover`
            }
        } else {
            this.styles = {
                'background-color': this.hex
            }
        }

        this.changeLayer = (e) => {
            console.log("Change Layer");
        }
    </script>
</colour>
