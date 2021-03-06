import { Component, Input, Output, EventEmitter } from "@angular/core";

/**
 * Sample Component
 */
@Component({
  templateUrl: "template.html",
  styleUrls: ["styles1.css", "styles2.css"]
})
export default class SampleComponent {
  /**
   * Is component disabled
   * Two line comment
   */
  @Input() disabled: Boolean = false;

  /**
   * Type of component
   */
  @Input() type: "primary" | "secondary" = "primary";

  /**
   * onClick output
   */
  @Output() onClick = new EventEmitter<boolean>();
}
